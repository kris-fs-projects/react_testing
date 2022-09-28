import { render, screen } from "@testing-library/react";
import { Chance } from "chance";
import Records from "./Records";

describe('Records component', () => {

    const chance = new Chance();

    it('should display a list of records', () => {
        // ARRANGE
        const mockRecords = [
            {
                id: chance.integer(),
                title: chance.string(),
                artistId: chance.integer(),
                year: chance.year()
            },
            {
                id: chance.integer(),
                title: chance.string(),
                artistId: chance.integer(),
                year: chance.year()
            }
        ];

        // ACT
        render(<Records records={mockRecords} />)

        // ASSERT
        const firstRecordTitle = screen.getByText(mockRecords[0].title);
        const secondRecordTitle = screen.getByText(mockRecords[1].title);
        expect(firstRecordTitle).toBeInTheDocument();
        expect(secondRecordTitle).toBeInTheDocument();

    });
});
