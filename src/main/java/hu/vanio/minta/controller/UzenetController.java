package hu.vanio.minta.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * A üzenetkezeléséhez használható REST végpontok
 * 
 * @author Szalai Gyula <gyula.szala@vanio.hu>
 */
@RestController
@RequestMapping("/api")
public class UzenetController {

    private List<String> uzenetek = new ArrayList<>();

    @RequestMapping(method = RequestMethod.GET, value="/uzenetek")
    @ResponseStatus(HttpStatus.OK)
    public List<String> getUzenetek() {
        return this.uzenetek;
    }
    
    @RequestMapping(method = RequestMethod.POST, value="/uzenetek")
    @ResponseStatus(HttpStatus.CREATED)
    public List<String> postUzenet(@RequestBody String uzenet) {
        this.uzenetek.add(uzenet);
        return this.uzenetek;
    }
    
    @RequestMapping(method = RequestMethod.DELETE, value="/uzenetek")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public List<String> deleteUzenetek() {
        this.uzenetek.clear();
        return this.uzenetek;
    }

}
