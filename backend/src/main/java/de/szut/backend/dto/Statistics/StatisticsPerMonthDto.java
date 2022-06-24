package de.szut.backend.dto.Statistics;

import lombok.Data;

import java.time.Month;

@Data
public class StatisticsPerMonthDto {
    public long userId;
    public float amount;
    public String description;
}
