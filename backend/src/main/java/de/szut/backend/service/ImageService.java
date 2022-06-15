package de.szut.backend.service;

import de.szut.backend.model.Image;
import de.szut.backend.repository.ImageRepository;
import org.hibernate.cfg.NotYetImplementedException;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    private final ImageRepository repo;

    public ImageService(ImageRepository _repo) {
        this.repo = _repo;
    }

    public void SavePictureToGroup(long groupId) {
        throw new NotYetImplementedException();
    }

    public Image savePicture(Image image) {
       return this.repo.save(image);
    }

    public Image getPicture(long userId) {
        return this.repo.getById(userId);
    }

    public boolean updatePicture(long imageId, String imageString) {
        if (this.repo.findById(imageId).get().imageId != null) {
            if (this.repo.findById(imageId).get().imageString == null || imageString == null || imageString == "")
                return true;
            Image image = new Image();
            image.imageId = imageId;
            image.imageString = imageString;
            this.repo.save(image);
            return true;
        }
        return false;
    }
}
