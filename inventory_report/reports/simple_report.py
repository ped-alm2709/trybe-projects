from datetime import datetime


class SimpleReport:
    @classmethod
    def get_oldest_manufacture(self, products):
        oldest_date = [date["data_de_fabricacao"] for date in products]
        oldest_date.sort()
        return oldest_date[0]

    @classmethod
    def get_closer_date(self, products):
        current_date = datetime.now().strftime("%Y-%m-%d")
        closer_date = [
          date["data_de_validade"] for date in products
          if current_date < date["data_de_validade"]]
        closer_date.sort()
        return closer_date[0]

    @classmethod
    def biggest_stock_company(self, products):
        companies = [company["nome_da_empresa"] for company in products]
        return max(companies)

    @classmethod
    def generate(self, products):
        getting_oldest_date = self.get_oldest_manufacture(products)
        getting_closer_date = self.get_closer_date(products)
        company = self.biggest_stock_company(products)

        return (
            f"Data de fabricação mais antiga: {getting_oldest_date}\n"
            f"Data de validade mais próxima: {getting_closer_date}\n"
            f"Empresa com maior quantidade de produtos estocados: {company}\n"
        )
