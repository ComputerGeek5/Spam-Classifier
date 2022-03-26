package com.example.spamclassifier.mapper;

import com.example.spamclassifier.dto.RoleDTO;
import com.example.spamclassifier.model.Role;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface RoleMapper extends ModelMapper<Role, RoleDTO> {
    RoleMapper INSTANCE = Mappers.getMapper(RoleMapper.class);
}