using PartnerService.Models;

namespace PartnerService.Producers {
    public interface IPartnerProducer {
         void sendPartnerCreated(PartnerItem partnerItem);
         void sendPartnerChanged(PartnerItem partnerItem);
    }
}