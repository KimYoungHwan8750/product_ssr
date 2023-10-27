package com.kh.product.Controller.Main;

import com.kh.product.DTO.ProductDTO;
import com.kh.product.Entity.Product;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.File;

@Controller
public class MainToProduct {
    @GetMapping("/")
    public String whiteSpace(){
        return "main.html";
    }

    @PostMapping("/{filePath}_page")
    public String insert(@PathVariable String filePath,Model model) {
        ProductDTO productDTO = new ProductDTO();
        model.addAttribute("productDTO",productDTO);


        return filePath+"/"+filePath+".html";
    }



}
