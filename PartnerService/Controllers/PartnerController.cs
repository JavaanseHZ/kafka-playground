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
        private CreatePartnerProducer createPartnerProducer;
        private ChangePartnerProducer changePartnerProducer;
        private DeletePartnerProducer deletePartnerProducer;

        public PartnerController(PartnerContext context,
                CreatePartnerProducer createPartnerProducer,
                ChangePartnerProducer changePartnerProducer,
                DeletePartnerProducer deletePartnerProducer) {
            this.createPartnerProducer = createPartnerProducer;
            this.changePartnerProducer = changePartnerProducer;
            this.deletePartnerProducer = deletePartnerProducer;
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
            createPartnerProducer.sendEvent(partnerItem);
            return CreatedAtRoute("GetPartner", new { id = partnerItem.id }, partnerItem);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Guid id, PartnerItem partnerItem) {
            var item = context.PartnerItems.Find(id);
            if (item == null) {
                return NotFound();
            }
            changePartnerProducer.sendEvent(item);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            var item = context.PartnerItems.Find(id);
            if (item == null) {
                return NotFound();
            }
            deletePartnerProducer.sendEvent(item);
            return NoContent();
        }
    }
}