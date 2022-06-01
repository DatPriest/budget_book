package de.szut.backend.repository;

import de.szut.backend.dto.OutputFaqDto;
import de.szut.backend.model.FAQ;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface FaqRepository extends JpaRepository<FAQ, Long> {
}
