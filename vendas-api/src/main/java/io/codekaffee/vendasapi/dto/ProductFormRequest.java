package io.codekaffee.vendasapi.dto;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class ProductFormRequest {

    @NotNull
    @NotBlank
    private String sku;

    @NotNull
    @NotBlank
    @JsonProperty(value = "name")
    private String productName;

    @NotNull
    private String description;

    @DecimalMin(value = "0.00")
    private BigDecimal price;

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    @Override
    public String toString() {
        try {
            return new ObjectMapper().writeValueAsString(this);
        } catch (JsonProcessingException e) {
            return "ProductFormRequest [description=" + description + ", price=" + price + ", productName=" + productName
            + ", sku=" + sku + "]";
        }
    }

    

 
}
