using Microsoft.EntityFrameworkCore;

namespace client.models {
    public class ClientContext : DbContext {
        public ClientContext(DbContextOptions<ClientContext> options) : base(options) {}

        public DbSet<ClientItem> ClientItems { get; set; }
    }
}