package szut.de.workshop.model;

import lombok.Data;
import javax.persistence.*;
import java.util.Set;

@Data
@Entity
public class HouseholdGroup{
    @Id
    @GeneratedValue(Strategy =GenerationType.IDENTITY)
    private Long hGroup_Id;

    @NotBlank(message = "name ist mandatory")
    private string name;

    private string imageUrl;

}