using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using PartnerService.Models;
using PartnerService.Producers;

namespace PartnerService.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class PartnerController : ControllerBase {
        private readonly PartnerContext _context;
        private IPartnerProducer partnerProducer;

        public PartnerController(PartnerContext context, IPartnerProducer partnerProducer) {
            this.partnerProducer = partnerProducer;
            _context = context;
            if (_context.PartnerItems.Count() == 0) {
                _context.PartnerItems.Add(new PartnerItem { firstname = "Franz", lastname = "Mayer" });
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public ActionResult<List<PartnerItem>> GetAll() {
            return _context.PartnerItems.ToList();
        }

        [HttpGet("{id}", Name = "GetPartner")]
        public ActionResult<PartnerItem> GetById(long id) {
            var item = _context.PartnerItems.Find(id);
            if (item == null) {
                return NotFound();
            }
            return item;
        }

        [HttpPost]
        public IActionResult Create(PartnerItem partnerItem) {
            _context.PartnerItems.Add(partnerItem);
            _context.SaveChanges();

            partnerProducer.sendPartnerCreated(partnerItem);

            return CreatedAtRoute("GetPartner", new { id = partnerItem.id }, partnerItem);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, PartnerItem partnerItem) {
            var item = _context.PartnerItems.Find(id);
            if (item == null) {
                return NotFound();
            }

            item.firstname = partnerItem.firstname;
            item.lastname = partnerItem.lastname;
            item.street = partnerItem.street;
            item.city = partnerItem.city;

            _context.PartnerItems.Update(item);
            _context.SaveChanges();
            
            partnerProducer.sendPartnerChanged(item);
            
            return NoContent();
        }
     

    }
}