package com.carteira.entities;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "investimentos")
public class Investimento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String tipo; // Ex: Ação, Fundo, Cripto

    @Column(nullable = false)
    private Double valorInvestido;

    @Column
    private Double rentabilidade = 0.0;

    @Column(nullable = false)
    private LocalDate dataAplicacao;

    @Column
    private String status = "ATIVO";

    // Construtores
    public Investimento() {
    }

    public Investimento(String nome, String tipo, Double valorInvestido, LocalDate dataAplicacao) {
        this.nome = nome;
        this.tipo = tipo;
        this.valorInvestido = valorInvestido;
        this.dataAplicacao = dataAplicacao;
    }

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }

    public Double getValorInvestido() { return valorInvestido; }
    public void setValorInvestido(Double valorInvestido) { this.valorInvestido = valorInvestido; }

    public Double getRentabilidade() { return rentabilidade; }
    public void setRentabilidade(Double rentabilidade) { this.rentabilidade = rentabilidade; }

    public LocalDate getDataAplicacao() { return dataAplicacao; }
    public void setDataAplicacao(LocalDate dataAplicacao) { this.dataAplicacao = dataAplicacao; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}

