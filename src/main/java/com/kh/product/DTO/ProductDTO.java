package com.kh.product.DTO;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Table(name = "PRODUCT")
public class ProductDTO {
    @Column(name = "PID")
    private Long pid;
//    @NotBlank
    @Column(name="PNAME")
    private String pname;
//    @NotNull
//    @Positive
    @Column(name="QUANTITY")
    private Long quantity;
//    @NotNull
//    @Positive
//    @Min(1000L)
    @Column(name="PRICE")
    private Long price;
}
