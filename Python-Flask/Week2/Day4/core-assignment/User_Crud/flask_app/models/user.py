from flask_app.config.mysqlconnection import connectToMySQL

class Users:
    db_name="users_schema"
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create_users(cls,data):
        query = "Insert Into users (first_name,last_name,email) Values (%(first_name)s,%(last_name)s,%(email)s);"
        result = connectToMySQL(cls.db_name).query_db(query, data)
        print(result)
        return result
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(cls.db_name).query_db(query)
        list_users_from_db = []
        for row in results:
            list_users_from_db.append(cls(row))
        print(list_users_from_db)
        return list_users_from_db

    @classmethod
    def get_one_user(cls,data):
        query = "SELECT * FROM users  where id=%(id)s;"
        result = connectToMySQL(cls.db_name).query_db(query,data)
        user = cls(result[0])
        print("-"*60, user)
        return user

    @classmethod
    def edit_one_user(cls,data):
        query = "UPDATE  users  SET first_name=%(first_name)s,last_name=%(last_name)s,email=%(email)s where id=%(id)s;"
        return connectToMySQL(cls.db_name).query_db(query,data)
    
    @classmethod
    def delete(cls,data):
        query = "DELETE FROM users WHERE id=%(id)s;"
        return connectToMySQL(cls.db_name).query_db(query,data)

