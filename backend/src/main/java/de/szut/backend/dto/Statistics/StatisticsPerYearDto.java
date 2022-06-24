package de.szut.backend.dto.Statistics;

import lombok.Data;

@Data
public class StatisticsPerYearDto {
    public long userId;
    public float amount;
    public String description;
}
