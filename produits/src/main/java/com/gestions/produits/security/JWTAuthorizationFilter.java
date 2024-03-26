package com.gestions.produits.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class JWTAuthorizationFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String jwt = request.getHeader("Authorization");

        if (jwt != null && jwt.startsWith(SecParams.prefix)) {

                JWTVerifier verifier = JWT.require(Algorithm.HMAC256(SecParams.Secret)).build();
                jwt = jwt.substring(SecParams.n);

                DecodedJWT decodedJWT = verifier.verify(jwt);
                String username = decodedJWT.getSubject();
                List<String> roles = decodedJWT.getClaims().get("roles").asList(String.class);




                // Vérifier les autorisations en fonction de la requête
                if (checkAuthorization(request, roles)) {
                    Collection <GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
                    for (String r : roles)
                        authorities.add(new SimpleGrantedAuthority(r));

                    UsernamePasswordAuthenticationToken user =
                            new UsernamePasswordAuthenticationToken(username,null,authorities);
                    SecurityContextHolder.getContext().setAuthentication(user);
                    // Continuer la chaîne de filtres si l'utilisateur est autorisé
                    filterChain.doFilter(request, response);
                } else {
                    System.out.println("acces refusé");
                    // L'utilisateur n'est pas autorisé à accéder à la ressource
                    response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                }
            }
//        }
        else {
//            // Pas de jeton JWT fourni dans l'en-tête Authorization
            System.out.println("mauvaise route");
           filterChain.doFilter(request, response);}

    }

    private boolean checkAuthorization(@org.jetbrains.annotations.NotNull HttpServletRequest request, List<String> roles) {
        // Implementez la logique de vérification des autorisations ici
        // Par exemple, vérifiez si les rôles incluent "ADMIN" pour accéder à certaines ressources
        // Utilisez les informations de la requête (URL, méthode HTTP, etc.) pour déterminer la ressource demandée
        // Retournez true si l'utilisateur est autorisé, false sinon
        String requestURI = request.getRequestURI();

        if (requestURI.contains("/produits/api/addprod") && roles.contains("ADMIN")) {
            return true;  // L'administrateur peut ajouter un produit
        }
        else if (requestURI.contains("/produits/api/updateprod") && roles.contains("ADMIN")) {
            return true;  // L'administrateur peut mettre à jour un produit
        }
        else if (requestURI.contains("/produits/api/delprod") && roles.contains("ADMIN")) {
            return true;  // L'administrateur peut supprimer un produit
        }
        else if ((requestURI.contains("/produits/api/all") || requestURI.contains("/produits/api/getById"))||(requestURI.contains("/produits/cat") ||requestURI.contains("/produits/api/prodByNom/")||requestURI.contains("/produits/api/prodscat/")) && (roles.contains("ADMIN") || roles.contains("USER"))) {
            return true;  // Tous les utilisateurs (ADMIN ou USER) peuvent accéder à la liste des produits ou à un produit spécifique
        }


        else {
            return false;  // Par défaut, l'accès est refusé
        }
    }

}
