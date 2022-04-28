package de.szut.backend.service;

import de.szut.backend.repository.ImageRepository;
import org.hibernate.cfg.NotYetImplementedException;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    private final ImageRepository repo;

    public ImageService(ImageRepository _repo) {
        this.repo = _repo;
    }

    public void SavePictureToGroup() {
        throw new NotYetImplementedException();
    }
}
