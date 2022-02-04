from inventory_report.reports.simple_report import SimpleReport


class CompleteReport(SimpleReport):
    @staticmethod
    def generate(data):
        simple_report_data = super(
            CompleteReport, CompleteReport
        ).generate(data)

        company_names_quantity = {
             company["nome_da_empresa"]: 0 for company in data
        }

        for item in data:
            company = item["nome_da_empresa"]
            company_names_quantity[company] += 1

        complete_report = ""

        for name, quantity in company_names_quantity.items():
            complete_report += f"- {name}: {quantity}\n"

        return (
            f"{simple_report_data}\n"
            f"Produtos estocados por empresa: \n"
            f"{complete_report}"
        )
