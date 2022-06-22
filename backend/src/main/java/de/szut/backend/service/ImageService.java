package de.szut.backend.service;

import de.szut.backend.model.Image;
import de.szut.backend.repository.ImageRepository;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    private final ImageRepository repo;

    public ImageService(ImageRepository _repo) {
        this.repo = _repo;
    }

    public Image savePicture(Image image) {
       return this.repo.save(image);
    }

    public Image getPicture(long id) {
        Image test = this.repo.findById(id);
        return this.repo.findById(id);
    }

    public boolean updatePicture(long imageId, String imageString) {
        Image temp = this.repo.findById(imageId);
        if (temp != null && temp.id != null) {
            if (temp.imageString == null || imageString == null || imageString.equals(""))
                return true;
            Image image = new Image();
            image.id = imageId;
            image.imageString = imageString;
            this.repo.save(image);
            return true;
        }
        return false;
    }
}
