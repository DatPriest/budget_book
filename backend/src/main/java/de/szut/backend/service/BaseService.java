package de.szut.backend.service;

import com.fasterxml.jackson.annotation.JacksonInject;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import javax.inject.Inject;

@Service
public class BaseService {
    protected final Logger logger;
    public BaseService() {
        this.logger = LogManager.getLogger();
    }

}
