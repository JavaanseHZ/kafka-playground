using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PartnerService.Models;
using PartnerService.Producers;

namespace PartnerService
{
    public class Startup {
        public void ConfigureServices(IServiceCollection services) {
            services.AddDbContext<PartnerContext>(opt => 
                opt.UseInMemoryDatabase("PartnerList"));
            services.AddMvc()
                    .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddTransient(typeof(IPartnerProducer), typeof(PartnerProducer));
        }

        public void Configure(IApplicationBuilder app) {
            app.UseMvc();
        }
    }
}
