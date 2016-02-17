package hu.vanio.minta;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MintaApplication {

    public static void main(String... args) {
        SpringApplication springApp = new SpringApplication(MintaApplication.class);
        springApp.run(args);
    }
    
}
