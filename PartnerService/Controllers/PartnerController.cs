using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using PartnerService.Models;
using PartnerService.Producers;
using PartnerService.Producers.Partner;
using System;

namespace PartnerService.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class PartnerController : ControllerBase {
        private readonly PartnerContext context;
        private PartnerCreatedProducer PartnerCreatedProducer;
        private PartnerChangedProducer PartnerChangedProducer;
        private PartnerDeletedProducer PartnerDeletedProducer;

        public PartnerController(PartnerContext context,
                PartnerCreatedProducer PartnerCreatedProducer,
                PartnerChangedProducer PartnerChangedProducer,
                PartnerDeletedProducer PartnerDeletedProducer) {
            this.PartnerCreatedProducer = PartnerCreatedProducer;
            this.PartnerChangedProducer = PartnerChangedProducer;
            this.PartnerDeletedProducer = PartnerDeletedProducer;
            this.context = context;
        }

        [HttpGet]
        public ActionResult<List<PartnerItem>> GetAll() {
            return context.PartnerItems.ToList();
        }

        [HttpGet("{id}", Name = "GetPartner")]
        public ActionResult<PartnerItem> GetById(Guid id) {
            var item = context.PartnerItems.Find(id);
            if (item == null) {
                return NotFound();
            }
            return item;
        }

        [HttpPost]
        public IActionResult Create(PartnerItem partnerItem) {
            partnerItem.id = Guid.NewGuid();
            context.PartnerItems.Add(partnerItem);
            context.SaveChanges();
            PartnerCreatedProducer.sendEvent(partnerItem);
            return CreatedAtRoute("GetPartner", new { id = partnerItem.id }, partnerItem);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Guid id, PartnerItem partnerItem) {
            var item = context.PartnerItems.Find(id);
            if (item == null) {
                return NotFound();
            }
            item.firstname = partnerItem.firstname;
            item.lastname = partnerItem.lastname;
            item.street = partnerItem.street;
            item.city = partnerItem.city;
            context.PartnerItems.Update(item);
            context.SaveChanges();
            PartnerChangedProducer.sendEvent(item);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            var item = context.PartnerItems.Find(id);
            if (item == null) {
                return NotFound();
            }
            context.Remove(item);
            context.SaveChanges();
            PartnerDeletedProducer.sendEvent(item);
            return NoContent();
        }
    }
}