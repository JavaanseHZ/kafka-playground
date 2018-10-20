using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using PartnerService.Models;

namespace PartnerService.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class PartnerController : ControllerBase {
        private readonly PartnerContext _context;
        private PartnerProducer partnerProducer;

        public PartnerController(PartnerContext context) {
            partnerProducer = new PartnerProducer();
            _context = context;
            if (_context.PartnerItems.Count() == 0)
            {
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
            if (item == null)
            {
                return NotFound();
            }
            return item;
        }

        [HttpPost]
        public IActionResult Create(PartnerItem item) {
            _context.PartnerItems.Add(item);
            _context.SaveChanges();
            partnerProducer.sendEvent(item);

            return CreatedAtRoute("GetPartner", new { id = item.id }, item);
        }
     

    }
}