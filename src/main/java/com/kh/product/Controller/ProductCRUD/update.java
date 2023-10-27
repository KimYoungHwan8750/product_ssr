package com.kh.product.Controller.ProductCRUD;

import com.kh.product.DAO.JPARepository.ProductRepository;
import com.kh.product.DTO.ProductDTO;
import com.kh.product.Entity.Product;
import com.kh.product.Service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.SQLException;

@Controller
@RequestMapping("/update_page")
@RequiredArgsConstructor
@Slf4j
public class update {
    private final ProductService productService;
    private final ProductRepository productRepository;
    @PatchMapping("/update")
    @ResponseBody
    public String Update(@ModelAttribute ProductDTO productDTO, BindingResult bindingResult, Model model){
        try {
            if (productService.FindByPid(productDTO.getPid()).getPid() == null) {
                return "조회된 상품이 없습니다.";
            } else if(productDTO.getPrice()<1000){
                return "가격을 확인해주세요.";
            } else if(productDTO.getQuantity()<1){
                return "수량을 확인해주세요.";
            }else {
                productRepository.save(new Product(productDTO));

                return "상품정보가 수정되었습니다.";
            }
        } catch (NullPointerException e){
            return "조회된 상품이 없습니다.";

        } catch (Exception e){
            return "입력한 상품 정보를 확인해주세요.";
        }

    }
}
