package de.szut.backend.mapper;

import de.szut.backend.dto.OutputFaqDto;
import de.szut.backend.dto.PostFaqDto;
import de.szut.backend.model.FAQ;
import org.springframework.stereotype.Service;

@Service
public class FaqMapper {

    public OutputFaqDto mapFaqToOutputFaqDto(FAQ faq){
        OutputFaqDto faqDto = new OutputFaqDto(faq.question, faq.answer);
        return faqDto;
    }

    public FAQ mapPostFaqDtoToFaq(PostFaqDto postFaqDto) {
        FAQ faq = new FAQ();
        faq.question = postFaqDto.getQuestion();
        faq.userID = postFaqDto.getUserId();
        return faq;
    }

}
