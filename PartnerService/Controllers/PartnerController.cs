using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using PartnerService.Models;
using PartnerService.Producers;
using PartnerService.Consumers;
using System;

namespace PartnerService.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class PartnerController : ControllerBase {
        private readonly PartnerContext context;
        private IPartnerProducer partnerProducer;

        public PartnerController(PartnerContext context, IPartnerProducer partnerProducer) {
            this.partnerProducer = partnerProducer;
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
            partnerProducer.sendPartnerCreated(partnerItem);
            return CreatedAtRoute("GetPartner", new { id = partnerItem.id }, partnerItem);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Guid id, PartnerItem partnerItem) {
            var item = context.PartnerItems.Find(id);
            if (item == null) {
                return NotFound();
            }
            partnerProducer.sendPartnerChanged(item);
            return NoContent();
        }
    }
}