package io.codekaffee.vendasapi.controllers;

import java.math.BigDecimal;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import io.codekaffee.vendasapi.dto.ProductFormRequest;

@WebMvcTest
public class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;


    private ProductFormRequest productFormRequest;


    @BeforeEach
    void setUp() {
        this.productFormRequest = new ProductFormRequest();

        this.productFormRequest.setProductName("Blusa do Imperio");
        this.productFormRequest.setDescription("");
        this.productFormRequest.setSku("1234567A");
        this.productFormRequest.setPrice(new BigDecimal(30.00));
    }



    @Test
    @DisplayName("Deve retornar 201, ao enviar a requisição POST")
    void shouldResult201() throws Exception {
        
        mockMvc.perform(
            MockMvcRequestBuilders.post("/api/produtos")
                .content(this.productFormRequest.toString())
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
        ).andExpect(MockMvcResultMatchers.status().isCreated());
    }
}
