import { Entity, EntityField, Resource } from "../../prisma";

type EntityFieldPartial = Pick<
  EntityField,
  "name" | "displayName" | "dataType" | "properties"
>;

export interface EntityPartial
  extends Pick<Entity, "id" | "name" | "displayName"> {
  versions: {
    fields: EntityFieldPartial[];
  }[];
}

export interface ResourcePartial extends Pick<Resource, "id" | "name"> {
  entities: EntityPartial[];
}

interface DataModel {
  name: string;
  fields: {
    name: string;
    dataType: string;
  }[];
}

export interface BreakTheMonolithPromptInput {
  dataModels: DataModel[];
}

export interface BreakTheMonolithPromptOutput {
  microservices: {
    name: string;
    functionality: string;
    dataModels: string[];
  }[];
}
