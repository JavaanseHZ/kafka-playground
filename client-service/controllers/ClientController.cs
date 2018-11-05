using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using client.models;
using client.producers;
using client.producers.client;
using System;

namespace client.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase {
        private readonly ClientContext context;
        private ClientCreatedProducer clientCreatedProducer;
        private ClientChangedProducer clientChangedProducer;
        private DeleteClientProducer deleteClientProducer;

        public ClientController(ClientContext context,
                ClientCreatedProducer clientCreatedProducer,
                ClientChangedProducer clientChangedProducer,
                DeleteClientProducer deleteClientProducer) {
            this.clientCreatedProducer = clientCreatedProducer;
            this.clientChangedProducer = clientChangedProducer;
            this.deleteClientProducer = deleteClientProducer;
            this.context = context;
        }

        [HttpGet]
        public ActionResult<List<ClientItem>> GetAll() {
            return context.ClientItems.ToList();
        }

        [HttpGet("{id}", Name = "GetClient")]
        public ActionResult<ClientItem> GetById(Guid id) {
            var item = context.ClientItems.Find(id);
            if (item == null) {
                return NotFound();
            }
            return item;
        }

        [HttpPost]
        public IActionResult Create(ClientItem clientItem) {
            clientItem.id = Guid.NewGuid();
            context.ClientItems.Add(clientItem);
            context.SaveChanges();
            clientCreatedProducer.sendEvent(clientItem);
            return CreatedAtRoute("GetClient", new { id = clientItem.id }, clientItem);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Guid id, ClientItem clientItem) {
            var item = context.ClientItems.Find(id);
            if (item == null) {
                return NotFound();
            }
            item.firstname = clientItem.firstname;
            item.lastname = clientItem.lastname;
            item.street = clientItem.street;
            item.city = clientItem.city;
            context.ClientItems.Update(item);
            context.SaveChanges();
            clientChangedProducer.sendEvent(item);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            var item = context.ClientItems.Find(id);
            if (item == null) {
                return NotFound();
            }
            deleteClientProducer.sendEvent(item);
            return NoContent();
        }
    }
}