package com.gestions.produits.security;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Collections;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    AuthenticationManager authMgr;

    @Bean
    public SecurityFilterChain filterChain (HttpSecurity http) throws Exception
    {
        http.sessionManagement( session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

                .csrf(AbstractHttpConfigurer::disable)
                .cors(cors -> cors.configurationSource(request -> {
                    CorsConfiguration cors1 = new CorsConfiguration();

                    cors1.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
                    cors1.setAllowedMethods(Collections.singletonList("*"));
                    cors1.setAllowCredentials(true);
                    cors1.setAllowedHeaders(Collections.singletonList("*"));
                    cors1.setExposedHeaders(Collections.singletonList("Authorization"));
                    cors1.setMaxAge(3600L);
                    return cors1;
                }))



                .authorizeHttpRequests( requests -> requests
                        .requestMatchers("/login").permitAll()
                        .requestMatchers("/all").hasAuthority("ADMIN")

                        .requestMatchers("/api/v1/auth/**", "/v3/api-docs/**", "produits/swagger-ui/**")
                        .permitAll()


                        .requestMatchers(HttpMethod.GET,"/produits/api/all/**")
                        .hasAnyAuthority("ADMIN","USER")
                        .requestMatchers(HttpMethod.GET,"/produits/api/prodscat/**")
                        .hasAnyAuthority("ADMIN","USER")
                        .requestMatchers(HttpMethod.GET,"/produits/api/prodByNom/**")
                        .hasAnyAuthority("ADMIN","USER")


                        .requestMatchers(HttpMethod.GET,"/produits/api/getById/**")
                        .hasAnyAuthority("ADMIN","USER")

                        .requestMatchers(HttpMethod.POST,"/produits/api/addprod/**")
                        .hasAuthority("ADMIN")

                        .requestMatchers(HttpMethod.PUT,"/produits/api/updateprod/**")
                        .hasAuthority("ADMIN")

                        .requestMatchers(HttpMethod.DELETE,"/produits/api/delprod/**")
                        .hasAuthority("ADMIN")
//


                        .anyRequest().authenticated())


                .addFilterBefore(new JWTAuthenticationFilter(authMgr),
                        UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(new JWTAuthorizationFilter(), BasicAuthenticationFilter.class)
             ;



        return http.build();
    }



}
