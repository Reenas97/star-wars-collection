import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Card from '../components/Card';

describe("Card", () => {
    const mockLink = jest.fn();

    it("should render the right name", () => {
        render(<Card name="Luke" imageUrl="https://example.com/luke.jpg" link={mockLink} />);
        const nameElement = screen.getByRole("heading", { name: /darth vader/i });
        expect(nameElement).toBeInTheDocument();
    });

    it("should render the right image", () => {
        render(<Card name="Luke" imageUrl="https://example.com/luke.jpg" link={mockLink} />);
        const imgElement = screen.getByRole("img", { name: /darth vader/i });
        expect(imgElement).toHaveAttribute("src", "https://example.com/luke.jpg");
    });

    it("should render the right home planet when it exists", () => {
        render(<Card name="Luke" homeworld="Tatooine" imageUrl="https://example.com/luke.jpg" link={mockLink} />);
        const planetElement = screen.getByText(/planeta natal/i);
        expect(planetElement).toBeInTheDocument();
    });

    it("shouldn't render the home planet when it doesn't exists", () => {
        render(<Card name="Luke" imageUrl="https://example.com/luke.jpg" link={mockLink} />);
        const planetElement = screen.queryByText(/planeta natal/i);
        expect(planetElement).not.toBeInTheDocument();
    });

    it("should call the function link when the card is clicked", () => {
        render(<Card name="Luke" imageUrl="https://example.com/luke.jpg" link={mockLink} />);
        const cardElement = screen.getByRole("img", { name: /darth vader/i }).parentElement;   
        if (cardElement) {
            cardElement.click();
            expect(mockLink).toHaveBeenCalled();
        } else {
            throw new Error("O elemento do card não foi encontrado.");
        }
    });
});
