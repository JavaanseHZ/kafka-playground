using Microsoft.EntityFrameworkCore;

namespace PartnerService.Models {
    public class PartnerContext : DbContext {
        public PartnerContext(DbContextOptions<PartnerContext> options) : base(options) {}

        public DbSet<PartnerItem> PartnerItems { get; set; }
    }
}