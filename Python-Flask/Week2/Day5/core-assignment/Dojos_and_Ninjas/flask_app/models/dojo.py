from flask_app.config.mysqlconnection import connectToMySQL

class Dojo:
    db_name="dojos_and_ninjas_schema"
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']


    @classmethod
    def create_dojo(cls,data):
        query = "Insert Into dojos (name) Values (%(name)s);"
        result = connectToMySQL(cls.db_name).query_db(query, data)
        return result


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL(cls.db_name).query_db(query)
        list_dojos_from_db = []
        for row in results:
            list_dojos_from_db.append(cls(row))
        # print(list_dojos_from_db)
        return list_dojos_from_db

    @classmethod
    def get_one_by_id(cls,data):
        query = "SELECT * FROM dojos where id = %(id)s;"
        result = connectToMySQL(cls.db_name).query_db(query,data)
        print(""*60,result)
        dojo = cls(result[0])
        print("-"*60, dojo)
        return dojo
