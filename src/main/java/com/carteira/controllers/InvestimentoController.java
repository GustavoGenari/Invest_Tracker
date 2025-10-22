package com.carteira.controllers;

import com.carteira.entities.Investimento;
import com.carteira.services.InvestimentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Marca a classe como controller REST
@RequestMapping("/investimentos") // URL base para todos os endpoints
public class InvestimentoController {
    private InvestimentoService investimentoService;

    // Criar investimento
    @PostMapping
    public ResponseEntity<Investimento> criarInvestimento(@RequestBody Investimento investimento) {
        Investimento novo = investimentoService.salvarInvestimento(investimento);
        return ResponseEntity.ok(novo);
    }

    // Listar todos
    @GetMapping
    public ResponseEntity<List<Investimento>> listarInvestimentos() {
        List<Investimento> investimentos = investimentoService.listarTodos();
        return ResponseEntity.ok(investimentos);
    }

    // Buscar por ID
    @GetMapping("/{id}")
    public ResponseEntity<Investimento> buscarInvestimento(@PathVariable Long id) {
        return investimentoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Atualizar investimento
    @PutMapping("/{id}")
    public ResponseEntity<Investimento> atualizarInvestimento(@PathVariable Long id,
                                                              @RequestBody Investimento investimento) {
        return investimentoService.buscarPorId(id)
                .map(i -> {
                    i.setNome(investimento.getNome());
                    i.setTipo(investimento.getTipo());
                    i.setValorInvestido(investimento.getValorInvestido());
                    i.setRentabilidade(investimento.getRentabilidade());
                    i.setDataAplicacao(investimento.getDataAplicacao());
                    i.setStatus(investimento.getStatus());
                    Investimento atualizado = investimentoService.salvarInvestimento(i);
                    return ResponseEntity.ok(atualizado);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Excluir investimento
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirInvestimento(@PathVariable Long id) {
        investimentoService.excluirPorId(id);
        return ResponseEntity.noContent().build();
    }
}
