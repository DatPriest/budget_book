package de.szut.backend.dto;

import lombok.Data;

@Data
public class CurrencyDto {
    public String baseCurrency;
    public String toCurrency;
    public float rate;
}
