using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PartnerService.Models;
using PartnerService.Producers;
using PartnerService.Consumers;

namespace PartnerService
{
    public class Startup {
        public void ConfigureServices(IServiceCollection services) {
            services.AddDbContext<PartnerContext>(opt => 
                opt.UseInMemoryDatabase("PartnerList"), ServiceLifetime.Transient, ServiceLifetime.Transient);
            services.AddTransient(typeof(IPartnerProducer), typeof(PartnerProducer));
            services.AddTransient(typeof(IPartnerConsumer), typeof(PartnerConsumer));
            services.AddMvc()
                    .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        public void Configure(IApplicationBuilder app) {
            app.ApplicationServices.GetRequiredService<IPartnerConsumer>();
            app.UseMvc();
        }
    }
}
