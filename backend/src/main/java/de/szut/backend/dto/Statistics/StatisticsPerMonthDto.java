package de.szut.backend.dto.Statistics;

import lombok.Data;

import java.time.Month;

@Data
public class StatisticsPerMonthDto {
    public int month;
    public float amount;
}
