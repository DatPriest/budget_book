package de.szut.backend.service;

import de.szut.backend.dto.GroupCreateDto;
import de.szut.backend.dto.OutputFaqDto;
import de.szut.backend.dto.PostFaqDto;
import de.szut.backend.mapper.FaqMapper;
import de.szut.backend.model.FAQ;
import de.szut.backend.model.Group;
import de.szut.backend.model.User;
import de.szut.backend.repository.FaqRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FaqService extends BaseService {
    FaqRepository repo;
    FaqMapper mapper;

    public FaqService(FaqMapper mapper, FaqRepository repo){
        this.mapper = mapper;
        this.repo = repo;
    }

    public FAQ createFaq(PostFaqDto faq) {
        return repo.save(mapper.mapPostFaqDtoToFaq(faq));
    }

    public ArrayList<OutputFaqDto> getAllOutputFaq() {
        logger.info("Alle Fragen und antworten");
        ArrayList faqList = new ArrayList<OutputFaqDto>();
        List<FAQ> tempList = repo.findAll();

        for (FAQ tempFaq:tempList) {
            faqList.add(mapper.mapFaqToOutputFaqDto(tempFaq));
        }
        return faqList;
    }

    public ArrayList<OutputFaqDto> getAllOutputFaqWithAnswers() {
        logger.info("Alle Fragen und antworten");
        ArrayList faqList = new ArrayList<OutputFaqDto>();
        List<FAQ> tempList = repo.findAll();

        for (int i=0; i<tempList.size(); i++) {
            System.out.println(i);
            if (tempList.get(i).answer != null){
                faqList.add(mapper.mapFaqToOutputFaqDto(tempList.get(i)));
            }
        }
        return faqList;
    }

    public ArrayList<OutputFaqDto> getAllFaqFromUser(long userId){
        //TODO: 
        return null;
    }
}
