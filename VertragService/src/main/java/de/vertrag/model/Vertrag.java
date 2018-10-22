package de.vertrag.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.UUID;

@Entity
public class Vertrag implements Serializable {

    @Id
    private UUID id;
    private Partner partner;
    private String sparte;
    private double beitrag;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Partner getPartner() {
        return partner;
    }

    public void setPartner(Partner partner) {
        this.partner = partner;
    }

    public String getSparte() {
        return sparte;
    }

    public void setSparte(String sparte) {
        this.sparte = sparte;
    }

    public double getBeitrag() {
        return beitrag;
    }

    public void setBeitrag(double beitrag) {
        this.beitrag = beitrag;
    }

}

