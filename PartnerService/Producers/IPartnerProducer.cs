using PartnerService.Models;

namespace PartnerService.Producers {
    public interface IPartnerProducer {
         void sendCreatePartner(PartnerItem partnerItem);
         void sendChangePartner(PartnerItem partnerItem);
    }
}