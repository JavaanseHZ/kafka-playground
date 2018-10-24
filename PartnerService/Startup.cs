using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PartnerService.Models;
using PartnerService.Producers;
using PartnerService.Producers.Partner;
using PartnerService.Consumers;
using PartnerService.Consumers.Partner;

namespace PartnerService
{
    public class Startup {
        public void ConfigureServices(IServiceCollection services) {
            services.AddDbContext<PartnerContext>(opt => 
                opt.UseInMemoryDatabase("PartnerList"), ServiceLifetime.Transient, ServiceLifetime.Transient);
            
            services.AddTransient(typeof(ProducerConfiguration));
            services.AddTransient(typeof(CreatePartnerProducer));
            services.AddTransient(typeof(ChangePartnerProducer));
            services.AddTransient(typeof(DeletePartnerProducer));
            
            services.AddTransient(typeof(ConsumerConfiguration));
            services.AddTransient(typeof(PartnerCreatedConsumer));
            services.AddTransient(typeof(PartnerChangedConsumer));
            services.AddTransient(typeof(PartnerDeletedConsumer));
            
            services.AddMvc()
                    .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        public void Configure(IApplicationBuilder app) {
            app.ApplicationServices.GetRequiredService<PartnerCreatedConsumer>();
            app.ApplicationServices.GetRequiredService<PartnerChangedConsumer>();
            app.ApplicationServices.GetRequiredService<PartnerDeletedConsumer>();
            app.UseMvc();
        }
    }
}
