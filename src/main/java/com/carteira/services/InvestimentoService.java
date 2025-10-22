package com.carteira.services;

import com.carteira.entities.Investimento;
import com.carteira.repositories.InvestimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InvestimentoService {
    @Autowired
    private InvestimentoRepository investimentoRepository;

    // Criar ou atualizar um investimento
    public Investimento salvarInvestimento(Investimento investimento) {
        if (investimento.getValorInvestido() < 0) {
            throw new IllegalArgumentException("O valor investido não pode ser negativo.");
        }
        return investimentoRepository.save(investimento);
        }

    // Listar todos
    public List<Investimento> listarTodos() {
        return investimentoRepository.findAll();
    }

    // Buscar por ID
    public Optional<Investimento> buscarPorId(Long id) {
        return investimentoRepository.findById(id);
    }

    // Excluir por ID
    public void excluirPorId(Long id) {
        investimentoRepository.deleteById(id);
}
}
