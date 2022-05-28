package de.szut.backend.service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;


@Service
public class BaseService {
    protected final Logger logger;

    public BaseService() {
        this.logger = LogManager.getLogger(this.getClass().getName());
    }

}
