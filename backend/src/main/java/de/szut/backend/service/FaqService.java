package de.szut.backend.service;

import de.szut.backend.dto.OutputFaqDto;
import de.szut.backend.dto.PostFaqDto;
import de.szut.backend.mapper.FaqMapper;
import de.szut.backend.model.FAQ;
import de.szut.backend.repository.FaqRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Service zum erstellen und abfragen von Daten aus der FAQ Tabelle
 *
 * @author D. Martens
 */
@Service
public class FaqService extends BaseService {
    FaqRepository repo;
    FaqMapper mapper;

    public FaqService(FaqMapper mapper, FaqRepository repo){
        this.mapper = mapper;
        this.repo = repo;
    }

    /**
     * Schreibt eine neue frage in die Datenbank
     * @param faq Die Frage die gespeichert werden soll
     */
    public FAQ createFaq(PostFaqDto faq) {
        return repo.save(mapper.mapPostFaqDtoToFaq(faq));
    }

    /**
     * Erstellt eine ArrayList mit allen Fragen egal ob beantwortet oder nicht
     * @return Die ArrayList mit allen Fragen
     */
    public ArrayList<OutputFaqDto> getAllOutputFaq() {
        logger.info("Alle Fragen und antworten");
        ArrayList faqList = new ArrayList<OutputFaqDto>();
        List<FAQ> tempList = repo.findAll();

        for (FAQ tempFaq:tempList) {
            faqList.add(mapper.mapFaqToOutputFaqDto(tempFaq));
        }
        return faqList;
    }

    /**
     * Erstellt eine ArrayList mit allen Fragen, die bereits beantwortet wurden.
     * @return  die Liste mit den beantworteten Fragen
     */
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

    /**
     * akzeptiert nur fragen (und passende Antworten) die von einem User gestellt wurden
     * @param userId
     * @return
     */
    public ArrayList<OutputFaqDto> getAllFaqFromUser(long userId){
        logger.info("Alle Fragen und Antworten von einem User.");
        ArrayList faqList = new ArrayList<OutputFaqDto>();
        List<FAQ> tempList = repo.findAll();

        for (FAQ faq: tempList) {
            if (faq.userID == userId){
                faqList.add(faq);
            }
        }
        return faqList;
    }
}
