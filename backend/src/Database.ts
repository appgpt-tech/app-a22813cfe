//Source code generated by AppGPT (www.appgpt.tech)

//Class to create tables and seed new database
import { DataSource } from 'typeorm';
import { DBConfiguration } from './Configuration';
import { SettingsEntity } from './db/Settings.entity';
//autogenerate imports based on resources
import { DietEntity } from './db/Diet.entity';
import { ExerciseEntity } from './db/Exercise.entity';

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, DietEntity, ExerciseEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      Diet: [
        {
          Name: 'Name 1',
          Description: 'Description 1',
          Type: 'Type 1',
          Goal: 'Goal 1',
          Calories: 1,
          Proteins: 0.34,
          Fats: 0.78,
          Carbohydrates: 0.63,
          Duration: 'Duration 1',
          id: 52,
        },
        {
          Name: 'Name 2',
          Description: 'Description 2',
          Type: 'Type 2',
          Goal: 'Goal 2',
          Calories: 2,
          Proteins: 0.79,
          Fats: 0.2,
          Carbohydrates: 0.82,
          Duration: 'Duration 2',
          id: 87,
        },
        {
          Name: 'Name 3',
          Description: 'Description 3',
          Type: 'Type 3',
          Goal: 'Goal 3',
          Calories: 3,
          Proteins: 0.45,
          Fats: 0.68,
          Carbohydrates: 0.11,
          Duration: 'Duration 3',
          id: 61,
        },
        {
          Name: 'Name 4',
          Description: 'Description 4',
          Type: 'Type 4',
          Goal: 'Goal 4',
          Calories: 4,
          Proteins: 0.42,
          Fats: 0.39,
          Carbohydrates: 0.57,
          Duration: 'Duration 4',
          id: 4,
        },
        {
          Name: 'Name 5',
          Description: 'Description 5',
          Type: 'Type 5',
          Goal: 'Goal 5',
          Calories: 5,
          Proteins: 0.55,
          Fats: 0.52,
          Carbohydrates: 0.05,
          Duration: 'Duration 5',
          id: 86,
        },
      ],
      Exercise: [
        {
          Name: 'Name 1',
          Description: 'Description 1',
          MuscleGroup: 'MuscleGroup 1',
          DifficultyLevel: 'DifficultyLevel 1',
          EquipmentNeeded: 'EquipmentNeeded 1',
          Duration: 'Duration 1',
          Repetitions: 1,
          Sets: 1,
          id: 3,
        },
        {
          Name: 'Name 2',
          Description: 'Description 2',
          MuscleGroup: 'MuscleGroup 2',
          DifficultyLevel: 'DifficultyLevel 2',
          EquipmentNeeded: 'EquipmentNeeded 2',
          Duration: 'Duration 2',
          Repetitions: 2,
          Sets: 2,
          id: 58,
        },
        {
          Name: 'Name 3',
          Description: 'Description 3',
          MuscleGroup: 'MuscleGroup 3',
          DifficultyLevel: 'DifficultyLevel 3',
          EquipmentNeeded: 'EquipmentNeeded 3',
          Duration: 'Duration 3',
          Repetitions: 3,
          Sets: 3,
          id: 31,
        },
        {
          Name: 'Name 4',
          Description: 'Description 4',
          MuscleGroup: 'MuscleGroup 4',
          DifficultyLevel: 'DifficultyLevel 4',
          EquipmentNeeded: 'EquipmentNeeded 4',
          Duration: 'Duration 4',
          Repetitions: 4,
          Sets: 4,
          id: 68,
        },
        {
          Name: 'Name 5',
          Description: 'Description 5',
          MuscleGroup: 'MuscleGroup 5',
          DifficultyLevel: 'DifficultyLevel 5',
          EquipmentNeeded: 'EquipmentNeeded 5',
          Duration: 'Duration 5',
          Repetitions: 5,
          Sets: 5,
          id: 94,
        },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log('   Seeding database...');
      await this.SeedResource('DietEntity', data.Diet);
      await this.SeedResource('ExerciseEntity', data.Exercise);
      await this.SeedResource('SettingsEntity', {
        settingname: 'isSeeded',
        settingvalue: 'true',
      });
    } else {
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository('SettingsEntity');
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: 'isSeeded',
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table ' + resourceName);
    await repo.upsert(resourceData, ['id']);
  }
}