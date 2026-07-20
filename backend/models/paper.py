from sqlalchemy import Column, Integer, String, Text

from database.database import Base


class Paper(Base):

    __tablename__ = "papers"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(Text)

    authors = Column(Text)

    abstract = Column(Text)

    year = Column(String)

    url = Column(Text)

    search_query = Column(String)