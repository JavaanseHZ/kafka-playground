using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using client.models;
using client.producers;
using client.producers.client;
using client.consumers;
using client.consumers.client;

namespace client
{
    public class Startup {
        public void ConfigureServices(IServiceCollection services) {
            services.AddDbContext<ClientContext>(opt =>
                opt.UseInMemoryDatabase("ClientList"), ServiceLifetime.Transient, ServiceLifetime.Transient);

            services.AddTransient(typeof(ProducerConfiguration));
            services.AddTransient(typeof(ClientCreatedProducer));
            services.AddTransient(typeof(ClientChangedProducer));
            services.AddTransient(typeof(ClientDeletedProducer));
            services.AddTransient(typeof(DeleteClientProducer));

            services.AddTransient(typeof(ConsumerConfiguration));
            services.AddTransient(typeof(ClientDuplicatesFoundConsumer));
            services.AddTransient(typeof(DeleteClientConsumer));

            services.AddMvc()
                    .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        public void Configure(IApplicationBuilder app) {
            app.ApplicationServices.GetRequiredService<ClientDuplicatesFoundConsumer>();
            app.ApplicationServices.GetRequiredService<DeleteClientConsumer>();
            app.UseMvc();
        }
    }
}
