package de.contract.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.UUID;

@Entity
public class Contract implements Serializable {

    @Id
    private UUID id;
    private Client client;
    private String type;
    private double premium;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getPremium() {
        return premium;
    }

    public void setPremium(double premium) {
        this.premium = premium;
    }

}

