package de.szut.backend.model;

import javax.persistence.*;

@Entity
@Table(name="images")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long imageId;

    @Column(length = 3000000)
    public String imageString; // Could be an Bitmap or a Url
}
