using PartnerService.Models;
using System.Threading;

namespace PartnerService.Consumers {
    public interface IPartnerConsumer {
         void initPartnerChanged(CancellationTokenSource cts);
         void initPartnerCreated(CancellationTokenSource cts);
    }
}