package com.gestions.produits.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CategorieDTO {
    private Long idCat;
    private String nomCat;
    private String descriptionCat;

}
